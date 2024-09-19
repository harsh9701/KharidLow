import './ProductPreviewModal.css'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react';
import ProductDetails from '../../../../Components/ProductDetails/ProductDetails';
const ProductPreviewModal = (props) => {

    const closeModal = () => {
        props.setIsOpen(false);
    }

    return (
        <Modal size='full' isOpen={props.isOpen}>
            <ModalOverlay />
            {console.log(props)}
            <ModalContent className="product-preview-modal-content">
            <ModalCloseButton onClick={closeModal} />
                <ModalBody >
                    <h4 className="modal-subhead">Product preview</h4>
                    <ProductDetails productDetails={props.productDetails}></ProductDetails>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ProductPreviewModal;