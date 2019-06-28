import React from "react";

export const Info = (props) => {
    return (
        <div>
            <h1>info</h1>
            <p>the info is {props.info}</p>
        </div>
    )

};

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info, please dont share!</p>
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please Log In to view the Info</p>}
        </div>
    )
};

export const AdminInfo = withAdminWarning(Info);
export const AuthInfo = requireAuthentication(Info);