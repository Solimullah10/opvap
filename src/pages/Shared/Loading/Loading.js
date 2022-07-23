import React from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <div>
            <Button style={{ padding: '248px 0' }} className='border-0' variant="white" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="6xl"
                    role="status"
                    aria-hidden="true"
                />
                <span className='fs-1 ms-3'>Loading...</span>
            </Button>
        </div>
    );
};

export default Loading;