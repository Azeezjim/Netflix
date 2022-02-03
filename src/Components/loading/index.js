import React from "react";
import { Spinner, LockBody, Picture, ReleaseBody } from "./styles/loading";

export default function Loading({src, ...restProps}) {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} doto-tested="loading-pictures" />
        </Spinner>
    );
}

Loading.ReleaseBody = function LoadingRealsBody() {
    return <ReleaseBody />;
}