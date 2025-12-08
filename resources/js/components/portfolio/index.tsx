import { useState } from 'react';
import PortfolioSingle from '../portfolioSingle';

// Tipe untuk setiap item portfolio
interface PortfolioItem {
    Id: string;
    heading: string;
    subHeading: string;
    authorName: string;
    value: string;
    date: string;
    videosId: string;
    pImg1: string;
    pImg2: string;
    pImg3: string;
    vedio: string;
    des: string;
}

const Portfolio = () => {
    // Tipe untuk state yang menyimpan detail portfolio yang dibuka
    const [open, setOpen] = useState(false);
    const [state, setState] = useState<PortfolioItem | undefined>(undefined); // Menyimpan detail item yang dipilih

    function handleClose() {
        setOpen(false);
    }

    const handleClickOpen = (item: PortfolioItem) => {
        setOpen(true);
        setState(item); // Menyimpan item yang dipilih ke state
    };

    const portfolio: PortfolioItem[] = [
        {
            Id: '1',
            heading: 'Minimalism',
            subHeading: 'Illustration . Art Direction',
            authorName: 'Robert William',
            value: '$500',
            date: '25 Jan 2021',
            videosId: 'LUSa3yRTB9A',
            pImg1: 'images/portfolio/minimalism/img-1.jpg',
            pImg2: 'images/portfolio/minimalism/img-2.jpg',
            pImg3: 'images/portfolio/minimalism/img-3.jpg',
            vedio: '',
            des: 'Minimalism, Landing Page Design, App development, Mobile an Website Design an expert web designer and developer. Contrary to popular belief Lorem Ipsum is not simply random text. It has Design,',
        },
        {
            Id: '2',
            heading: 'Abstract Art',
            subHeading: 'Illustration . Art Direction',
            authorName: 'David Warner',
            value: '$400',
            date: '15 Jan 2021',
            videosId: 'r_hYR53r61M',
            pImg1: 'images/portfolio/abstract/img-1.jpg',
            pImg2: 'images/portfolio/abstract/img-2.jpg',
            pImg3: 'images/portfolio/abstract/img-3.jpg',
            vedio: '',
            des: 'Abstract Art, Landing Page Design, App development, Mobile an Website Design an expert web designer and developer. Contrary to popular belief Lorem Ipsum is not simply random text. It has Design,',
        },
        {
            Id: '3',
            heading: '3D Project',
            subHeading: 'Illustration . Art Direction',
            authorName: 'Ken Wiliamm',
            value: '$900',
            date: '12 Jan 2021',
            videosId: 'LUSa3yRTB9A',
            pImg1: 'images/portfolio/3d/img-1.jpg',
            pImg2: 'images/portfolio/3d/img-2.jpg',
            pImg3: 'images/portfolio/3d/img-3.jpg',
            vedio: '',
            des: '3D Project, Landing Page Design, App development, Mobile an Website Design an expert web designer and developer. Contrary to popular belief Lorem Ipsum is not simply random text. It has Design,',
        },
        {
            Id: '4',
            heading: 'Modern BG',
            subHeading: 'Illustration . Art Direction',
            authorName: 'Lily Aney',
            value: '$800',
            date: '09 Jan 2021',
            videosId: 'r_hYR53r61M',
            pImg1: 'images/portfolio/modern/img-1.jpg',
            pImg2: 'images/portfolio/modern/img-2.jpg',
            pImg3: 'images/portfolio/modern/img-3.jpg',
            vedio: '',
            des: 'Modern BG, Landing Page Design, App development, Mobile an Website Design an expert web designer and developer. Contrary to popular belief Lorem Ipsum is not simply random text. It has Design,',
        },
        {
            Id: '5',
            heading: 'Visual Design',
            subHeading: 'Illustration . Art Direction',
            authorName: 'Aliza mart',
            value: '$1000',
            date: '06 Jan 2021',
            videosId: 'LUSa3yRTB9A',
            pImg1: 'images/portfolio/visual/img-1.jpg',
            pImg2: 'images/portfolio/visual/img-2.jpg',
            pImg3: 'images/portfolio/visual/img-3.jpg',
            vedio: '',
            des: 'Visual Design, Landing Page Design, App development, Mobile an Website Design an expert web designer and developer. Contrary to popular belief Lorem Ipsum is not simply random text. It has Design,',
        },
        {
            Id: '6',
            heading: 'Product Design',
            subHeading: 'Illustration . Art Direction',
            authorName: 'Martin Gaptil',
            value: '$1200',
            date: '03 Jan 2021',
            videosId: 'r_hYR53r61M',
            pImg1: 'images/portfolio/pdesign/img-1.jpg',
            pImg2: 'images/portfolio/pdesign/img-2.jpg',
            pImg3: 'images/portfolio/pdesign/img-3.jpg',
            vedio: '',
            des: 'Product Design, Landing Page Design, App development, Mobile an Website Design an expert web designer and developer. Contrary to popular belief Lorem Ipsum is not simply random text. It has Design,',
        },
    ];

    return (
        <div className="tp-portfolio-area section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title text-center">
                        <span>Portfolio</span>
                        <h2>Latest Project</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tp-portfolio-item">
                            <div className="row">
                                {portfolio.map((port, prt) => (
                                    <div
                                        className="col-lg-4 col-md-6 col-sm-12 custom-grid"
                                        key={prt}
                                    >
                                        <div className="">
                                            <div className="tp-portfolio-single">
                                                <div className="tp-portfolio-img">
                                                    <img
                                                        src={port.pImg1}
                                                        alt={port.heading}
                                                    />
                                                </div>
                                                <div className="tp-portfolio-text">
                                                    <h2>{port.heading}</h2>
                                                    <span>
                                                        {port.subHeading}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            handleClickOpen(
                                                                port,
                                                            )
                                                        }
                                                    >
                                                        View Work
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PortfolioSingle
                open={open}
                onClose={handleClose}
                title={state?.heading ?? ''}
                doc={state?.des ?? ''}
                image1={state?.pImg1 ?? ''}
                image2={state?.pImg2 ?? ''}
                image3={state?.pImg3 ?? ''}
                authorName={state?.authorName ?? ''}
                videosId={state?.videosId ?? ''}
                value={state?.value ?? ''}
                date={state?.date ?? ''}
            />

            <div className="white_svg svg_white">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                </svg>
            </div>
        </div>
    );
};

export default Portfolio;
