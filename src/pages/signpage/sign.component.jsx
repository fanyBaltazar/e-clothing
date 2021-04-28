import React from 'react';

import SignIn from '../../components/sign-in/sign-in.componens';
import SingUp from '../../components/sign-up/sign-up.component';

import './sign.styles.scss';

const SignPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SingUp/>
    </div>
)

export default SignPage;