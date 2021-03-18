import React from 'react';

const authContext = React.createContext({
    authentiacted: false,
    login: () => {}
});

export default authContext;
