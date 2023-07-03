import React from "react";
import { Helmet } from 'react-helmet-async';

const MetaTags = props => {
    let title = 'Default Page';
    let description = 'Default description';
    let image = "%PUBLIC_URL%/images/logo-white.png";

    switch (props.type) {
        case 'Homepage':
            title = 'MERN';
            description = 'Welcome to my MERN demo application.';
            break;
        case 'Dashboard':
            title = 'Dashboard';
            description = 'Start exploring!';
            break;
        case 'Registration':
            title = 'Sign up';
            description = 'Register now to unlock my MERN demo application.';
            break;
        case 'ForgotPassword':
            title = 'Request Reset Password';
            description = 'Request reset password for forgotten password.';
            break;
        case 'NotFound':
            title = 'Not Found';
            description = 'Sorry, We can\'t find that page.';
            break;
        case 'ResetPassword':
            title = 'Reset Password';
            description = 'Reset your password to gain access again.';
            break;
        case 'UserProfile':
            title = 'User Profile';
            description = 'Update your profile or password';
            break;
    }


    return (
        <Helmet>
          <title>{title + ' | ' +process.env.REACT_APP_APP_TITLE}</title>
          <meta property="og:title" content={title + ' | ' + process.env.REACT_APP_APP_TITLE} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />

          <meta name="twitter:title" content={title + ' | ' + process.env.REACT_APP_APP_TITLE} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
}

export default MetaTags;