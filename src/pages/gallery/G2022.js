import Footer from "../../components/Footer";

function G2022() {

    
    const DataLogo = [
        "images/gallery/2022/22.jpg",
        "images/gallery/2022/23.jpg",
        "images/gallery/2022/24.jpg",
        "images/gallery/2022/25.jpg",
        "images/gallery/2022/26.jpg",
        "images/gallery/2022/27.jpg",
        "images/gallery/2022/28.jpg",
        "images/gallery/2022/29.jpg",
        "images/gallery/2022/30.jpg",
        "images/gallery/2022/31.JPG",
        "images/gallery/2022/32.JPG",
        "images/gallery/2022/33.JPG",
        "images/gallery/2022/34.JPG",
        "images/gallery/2022/35.JPG",
        "images/gallery/2022/36.jpg",
        "images/gallery/2022/37.jpg",
        "images/gallery/2022/38.jpg",
        "images/gallery/2022/39.jpg"
        
        
    ]

    return (
        <>
            <div className="section">
                <div className="container-fluid">
                    <div className="col-md-12">
                        <h1 className="text-center">2022</h1>

                        <div className="row">

                            {
                                DataLogo.map(function(Gimg21) {
                                    return(
                                        <div className="col-md-2">
                                            <div className="card">
                                                <img className="" src={Gimg21}></img>
                                            </div>
                                        </div>
                                    )
                                    
                                }) 
                                
                            }

                        </div>

                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default G2022;