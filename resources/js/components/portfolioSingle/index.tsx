'use client';

import { Dialog, Grid } from '@mui/material';
import { Fragment } from 'react';

interface portfolioSingleProps {
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    open: boolean;
    onClose: () => void;
    title: string;
    doc: string;
    image1: string;
    role: string;
    techStack: Array<string>;
    linkPublish?: string;
    linkSource?: string;
}

const portfolioSingle = ({
    maxWidth,
    open,
    onClose,
    title,
    doc,
    image1,
    role,
    techStack,
    linkPublish,
    linkSource,
}: portfolioSingleProps) => {
    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body">
                    <button className="modal-close" onClick={onClose}>
                        <i className="fa fa-close"></i>
                    </button>
                    <div className="tp-project-details-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tp-minimal-wrap">
                                    <div className="tp-minimal-img">
                                        <img src={image1} alt={"Maulana Haekal Noval Akbar - " + title} />
                                    </div>
                                    <h2>{title}</h2>
                                </div>
                                <div className="tp-p-role-section">
                                    <p><i className="bi bi-person-fill"></i> Role : {role}</p>
                                </div>
                                <div className="tp-p-details-section">
                                    <p className="text-justify">{doc}</p>
                                    <h4 className="text-white">Technology :</h4>
                                    {techStack && techStack.length > 0 && (
                                        <div className="tech-stack-list">
                                            {techStack.map((item, index) => (
                                                <span
                                                    key={index}
                                                    className="tech-stack-pill"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="tp-p-details-section">
                                    {linkSource && (
                                        <h4 className="text-white">GitHub : <a href={linkSource} target="_blank" rel="noopener noreferrer"><i className="bi bi-github text-white"></i></a></h4>
                                    )}
                                    {linkPublish && (
                                        <h4 className="text-white">Published : <a href={linkPublish} target="_blank" rel="noopener noreferrer"><i className="bi bi-globe2 text-white"></i></a></h4>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
};
export default portfolioSingle;
