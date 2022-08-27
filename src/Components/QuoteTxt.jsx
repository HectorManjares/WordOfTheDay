import React from 'react';

const QuoteTxt = ({ txt, author }) => {
    return (
        <>
            <p className='Content'>
                <h4><i class='bx bxs-quote-alt-left'></i>{txt}</h4>
                <h4 className='Author'>{author}</h4>
            </p>
        </>
    );
};

export default QuoteTxt;