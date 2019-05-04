const popupStyle = `
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;

    .popupContainer {
        position: relative;
        background-color:#fff;
        border-top: 2px solid #deb546;
        padding: 20px;
        width: 100%;
        margin: auto;
        margin-top: 0;
        box-shadow: 0px 2px 15px rgba(0,0,0,0.8);

        .closeButton {
            position: absolute;
            top: 10px;
            right: 15px;
            cursor: pointer;

            &:hover {
                transform: scale(1.1);
            }
        }
        @media (min-width: 576px) { 
            width: 85%;
            margin-top: 50px;
        }
        @media (min-width: 992px) { 
            width: 70%;
            margin-top: 100px;
        }
    }
`

export default popupStyle