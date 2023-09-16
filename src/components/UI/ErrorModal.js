import React from "react";

const Errormodal = (props) => {
    return (
        <div className="modal backdrop d-block" onClick={props.onConfirm}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-light">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                    </div>
                    <div className="modal-body">
                        <p>{props.message}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={props.onConfirm}>Okay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Errormodal;
