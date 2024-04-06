import React from 'react'
import Modal from 'react-modal';


const Model = ({ modalIsOpen }) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgb(204 201 201)', // Change background color here
            border: '8px solid rgb(88 90 3)', // Add border for better visibility
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)', // Add box shadow for a subtle effect
            borderRadius: '8px', // Add border radius for rounded corners
            padding: '20px', // Add padding for content spacing
            maxWidth: '680px', // Increase the width of the modal here
            width: '80%', // Set a percentage or pixel value for responsiveness
    
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark color with 50% opacity
            zIndex: 1000, // Adjust the z-index as needed
        }
    };

    function afterOpenModal() {
        if (subtitle) {
            subtitle.style.color = '#ddd';
        }
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="modal-new"
        >
            <div class="container text-center">
                <div class="row justify-content-center">

                    <div className="mb-4" style={{ borderRadius: '4px ', boxShadow: "rgb(11 11 19 / 25%) 12px 12px 2px 1px" }}>
                        {/* <img src={donate} alt="" width={160} /> */}
                    </div>
                    <div className="mb-4" style={{ backgroundColor: 'red', padding: '3px 6px 3px 8px', borderRadius: '40px ', boxShadow: "rgba(255, 0, 0, 0.53) 3px 4px 4px 1px" }}>

                        <h4 className="text-right text-white mb-1" style={{ fontWeight: 900, fontSize: '18px', textShadow: 'rgb(21 47 130) 4px 4px', }}>
                            अपने साथ लगातार जुड़े रहने के लिए हमें अपना सहयोग दें/दान करें <span style={{ fontSize: '26px' }}>🙏</span>
                        </h4>
                    </div>
                    <div className="row m-lg-3">
                        <div class="col-sm-6">
                            <h5 class="mt-0 text-left" style={{ fontSize: '19px', fontWeight: '700', textShadow: 'rgb(196 157 157) 2px 3px', color: '#586a04' }}>Account Name / खाता नाम</h5>
                        </div>
                        <div class="col-sm-6 text-center">
                            <h5 class="mt-0 text-left" style={{ fontSize: '19px', fontWeight: '700', textShadow: 'rgb(196 157 157) 2px 3px', color: '#586a04' }}>Third Eye World News (Hindi)</h5>
                        </div>

                        <div class="col-sm-6 text-center">
                            <h5 class="mt-0 text-left" style={{ fontSize: '19px', fontWeight: '700', textShadow: 'rgb(196 157 157) 2px 3px', color: '#586a04' }}>Account Number/खाता नंबर</h5>
                        </div>
                        <div class="col-sm-6 text-center">
                            <h5 class="mt-0 text-left" style={{ fontSize: '19px', fontWeight: '700', textShadow: 'rgb(196 157 157) 2px 3px', color: '#586a04' }}>000705029296</h5>
                        </div>
                        <div class="col-sm-6 text-center">
                            <h5 class="mt-0 text-left" style={{ fontSize: '19px', fontWeight: '700', textShadow: 'rgb(196 157 157) 2px 3px', color: '#586a04' }}>IFS Code/आईएफएस कोड</h5>
                        </div>
                        <div class="col-sm-6 text-center">
                            <h5 class="mt-0 text-left" style={{ fontSize: '19px', fontWeight: '700', textShadow: 'rgb(196 157 157) 2px 3px', color: '#586a04' }}>ICIC0000007</h5>
                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    )
}

export default Model