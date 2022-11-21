import CurationNavbar from "../../components/CurationNavbar"
import Footer from "../../components/Footer";


export default function Curation16()
{
    const DataCrtImg3 = [
        "images/curation/16/Instrumen6_1.jpg",
        "images/curation/16/Instrumen6_2.jpg",
        "images/curation/16/Instrumen6_3.jpg",
        "images/curation/16/Instrumen6_4.jpg",
        "images/curation/16/Instrumen6_5.jpg",
        "images/curation/16/Instrumen6_6.jpg",
        "images/curation/16/Instrumen6_7.jpg",
        "images/curation/16/Instrumen6_8.jpg",
        "images/curation/16/Instrumen6_9.jpg",
        "images/curation/16/Instrumen6_10.jpg",
        "images/curation/16/Instrumen6_11.jpg",
        "images/curation/16/Instrumen6_12.jpg",
        "images/curation/16/Instrumen6_13.jpg",
        "images/curation/16/Instrumen6_14.jpg",
        "images/curation/16/Instrumen6_15.jpg",
        "images/curation/16/Instrumen6_16.jpg",
        "images/curation/16/Instrumen6_17.jpg",
        "images/curation/16/Instrumen6_18.jpg",
        "images/curation/16/Instrumen6_19.jpg",
        "images/curation/16/Instrumen6_20.jpg",
        "images/curation/16/Instrumen6_21.jpg",
        "images/curation/16/Instrumen6_22.jpg",
        "images/curation/16/Instrumen6_23.jpg",
        "images/curation/16/Instrumen6_24.jpg",
        "images/curation/16/Instrumen6_25.jpg",
        "images/curation/16/Instrumen6_26.jpg",
        "images/curation/16/Instrumen6_27.jpg",
        "images/curation/16/Instrumen6_28.jpg",
        "images/curation/16/Instrumen6_29.jpg",
        "images/curation/16/Instrumen6_30.jpg"
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