import React, {useContext} from 'react';

import AuthRoutes from './auth.routes';
import DrawerUser from './app.routes';
import ContextData from '../contexts/ContextData';

const Routes = () => {

    const {signed} = useContext(ContextData);

    return signed ? <DrawerUser /> : <AuthRoutes />;
}

export default Routes;