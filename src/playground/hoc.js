// Higher Order Component (HOC) - A component (HOC) that renders another component.
// Advantages: Reuse Code, Render Hijacking, Prop Manipulation, Abract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Hello</h1>
        <p>The info is: {props.info}</p>
    </div>
)

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             { props.isAdmin && <p>This is private info.  Please don't share!</p>}
//             <WrappedComponent {...props}/>
//         </div>
//     );
// };

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>You must be authenticated to view this page.</p>
            )}
        </div>
    );
};

// My jank way before shown to use the ternary operator above
// { props.isAuthenticated && <WrappedComponent {...props}/>}
// { !props.isAuthenticated && <p>You must be authenticated to view this page.</p>}

const AuthInfo = requireAuthentication(Info);

//const AdminInfo = withAdminWarning(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));