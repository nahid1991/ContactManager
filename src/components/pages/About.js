import React from 'react';

export default function About(props) {
  return (
    <div>
      <h1 className="display-4 mb-3">
        About {props.match.params.name} manager
      </h1>
      <p className="lead">This is just a simple contact manager!</p>
      <p className="text-secondary">Version: 1.0.0</p>
    </div>
  );
}
