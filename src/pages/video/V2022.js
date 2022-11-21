import Footer from "../../components/Footer";

function V2022() {

    
    const DataVideo = [
        "https://www.youtube.com/embed/sSqidjSHxw0",
        "https://www.youtube.com/embed/d_Ny5d6_O10",
        "https://www.youtube.com/embed/Xsdr27YknYc",
        "https://www.youtube.com/embed/iYjCulgUoZc",
        "https://www.youtube.com/embed/bC6zbNJXyrU"
    ]

    return (
        <>
            <div className="section">
                <div className="container-fluid">
                    <div className="col-md-12">
                        <h1 className="text-center mb-5">2022</h1>

                        <div className="row">

                           
                            
                            <div className="col-md-12">
                                <div className="row">
                                {
                                    DataVideo.map(function(Vid2022){
                                        return(

                                            <div className="col-md-3 mb-3">
                                                <iframe src={Vid2022}></iframe>
                                            </div>

                                        )
                                    })
                                }
                                    
                                </div>
                            </div>
                                

                        </div>

                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default V2022;