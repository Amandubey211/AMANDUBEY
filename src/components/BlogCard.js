import React from "react";
import "./component-Styles/BlogCard.css";
import { Button, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import BlogModal from "./BlogModal";
const BlogCard = ({ BlogData }) => {
  const {
    blogImg,
    blogDate,
    blogTitle,
    blogVideosLink,
    blogCategory,
    para1,
    para2,
    para3,
    Quote,
  } = BlogData;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <div>
        <div
          className=" blogCard p-2  rounded-2 "
          onClick={onOpen}
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
        >
          <div className="overflow-hidden rounded-4 d-flex justify-content-center">
            <img className="rounded-3 blogImg" src={blogImg} alt={blogTitle} />
          </div>
          <div>
            <div className="d-flex justify-content-center ">
              <div className="py-2">
                {" "}
                <span className="fw-semibold">{blogTitle}</span>
              </div>
            </div>
          </div>
        </div>

        <Modal isOpen={isOpen} size="full" onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <BlogModal
                quote={Quote}
                ModalImg={blogImg}
                ModalCategory={blogCategory}
                ModalDate={blogDate}
                ModalTitle={blogTitle}
                videos={blogVideosLink}
                Description1={para1}
                Description2={para2}
                Description3={para3}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default BlogCard;
