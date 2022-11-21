import CurationNavbar from "../../components/CurationNavbar"
import Footer from "../../components/Footer";


export default function Curation3()
{
    const DataCrtImg3 = [
        "images/curation/3/instrumen2_1.jpg",
        "images/curation/3/instrumen2_2.jpg",
        "images/curation/3/instrumen2_3.jpg",
        "images/curation/3/instrumen2_4.jpg",
        "images/curation/3/instrumen2_5.jpg",
        "images/curation/3/instrumen2_6.jpg",
        "images/curation/3/instrumen2_7.jpg",
        "images/curation/3/instrumen2_8.jpg",
        "images/curation/3/instrumen2_9.jpg",
        "images/curation/3/instrumen2_10.jpg",
        "images/curation/3/instrumen2_11.jpg",
        "images/curation/3/instrumen2_12.jpg",
        "images/curation/3/instrumen2_13.jpg",
        "images/curation/3/instrumen2_14.jpg"
    ]
    return (
        <>
            <div className="mt-5">
                <div className="container">
                    <h2 className="text-center mb-3">Curation</h2>
                    <div className="col-md-12">
                        <div className="row">
                            
                        <CurationNavbar text="1" link="/curation1" />

                        <CurationNavbar text="3" link="/curation3" />

                        <CurationNavbar text="3(1)" link="/curation3_1" />

                        <CurationNavbar text="4" link="/curation4" />

                        <CurationNavbar text="11" link="/curation11" />

                        <CurationNavbar text="16" link="/curation16" />

                        </div>

                        
                        <div className="content-curation mt-3">
                            <div className="row">


                                {
                                    DataCrtImg3.map(function(Img1) {
                                        return(
                                            <div className="col-md-3">
                                                <div className="card">
                                                    <img src={Img1}></img>
                                                </div>
                                            </div>
                                        )
                                        
                                    }) 
                                    
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </>
    )
}