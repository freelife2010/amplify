import Amplify, { Logger } from 'aws-amplify';
var logger = new Logger('AuthDecorator');
function check(authState) {
    // check for current authenticated user to init authState
    Amplify.Auth.currentAuthenticatedUser()
        .then(function (user) {
        logger.debug('has authenticated user', user);
        authState.next({ state: 'signedIn', user: user });
    })
        .catch(function (err) {
        logger.debug('no authenticated user', err);
        authState.next({ state: 'signedOut', user: null });
    });
}
;
function decorateSignIn(authState) {
    var _signIn = Amplify.Auth.signIn;
    Amplify.Auth.signIn = function (username, password) {
        return _signIn.call(Amplify.Auth, username, password)
            .then(function (user) {
            logger.debug('signIn success');
            if (!user.challengeName) {
                authState.next({ state: 'signedIn', user: user });
                return user;
            }
            logger.debug('signIn challenge: ' + user.challengeName);
            if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                authState.next({ state: 'requireNewPassword', user: user });
            }
            else if (user.challengeName === 'MFA_SETUP') {
                authState.next({ state: 'setupMFA', user: user });
            }
            else if (user.challengeName === 'SMS_MFA' ||
                user.challengeName === 'SOFTWARE_TOKEN_MFA') {
                authState.next({ state: 'confirmSignIn', user: user });
            }
            else {
                logger.debug('warning: unhandled challengeName ' + user.challengeName);
            }
            return user;
        })
            .catch(function (err) {
            logger.debug('signIn error', err);
            throw err;
        });
    };
}
;
function decorateSignOut(authState) {
    var _signOut = Amplify.Auth.signOut;
    Amplify.Auth.signOut = function () {
        return _signOut.call(Amplify.Auth)
            .then(function (data) {
            logger.debug('signOut success');
            authState.next({ state: 'signedOut', user: null });
            return data;
        })
            .catch(function (err) {
            logger.debug('signOut error', err);
            throw err;
        });
    };
}
;
function decorateSignUp(authState) {
    var _signUp = Amplify.Auth.signUp;
    Amplify.Auth.signUp = function (username, password, email, phone_number) {
        return _signUp.call(Amplify.Auth, username, password, email, phone_number)
            .then(function (data) {
            logger.debug('signUp success');
            authState.next({ state: 'confirmSignUp', user: { username: username } });
            return data;
        })
            .catch(function (err) {
            logger.debug('signUp error', err);
            throw err;
        });
    };
}
;
function decorateConfirmSignUp(authState) {
    var _confirmSignUp = Amplify.Auth.confirmSignUp;
    Amplify.Auth.confirmSignUp = function (username, code) {
        return _confirmSignUp.call(Amplify.Auth, username, code)
            .then(function (data) {
            logger.debug('confirmSignUp success');
            authState.next({ state: 'signIn', user: { username: username } });
            return data;
        })
            .catch(function (err) {
            logger.debug('confirmSignUp error', err);
            throw err;
        });
    };
}
;
export function authDecorator(authState) {
    check(authState);
    decorateSignIn(authState);
    decorateSignOut(authState);
    decorateSignUp(authState);
    decorateConfirmSignUp(authState);
}
;
//# sourceMappingURL=auth.decorator.js.map