import { CenteredContainer } from "../../ui-library/layout-components";
import styled from "styled-components";

const PhotosPage = () => {
  return (
    <CenteredContainer>
      <h1>/photos</h1>
      <Gallery>
        <GalleryItem>
          <GalleryImage
            src="https://user-images.githubusercontent.com/8138047/156686351-8c0f88cc-1778-451f-bf1f-74e4ab47b356.jpeg"
            alt="sunset behind San Francisco city skyline"
          />
        </GalleryItem>
        <GalleryItem>
          <GalleryImage
            src="https://user-images.githubusercontent.com/8138047/156685219-dbcea714-fcd8-41a7-b862-72961a9b89ac.jpeg"
            alt="sunset behind San Francisco city skyline"
          />
        </GalleryItem>
        <GalleryItem>
          <GalleryImage
            src="https://user-images.githubusercontent.com/8138047/156685871-84ae4168-ae8b-4aee-8836-48bb0eefcfcc.jpeg"
            alt="sunset behind San Francisco city skyline"
          />
        </GalleryItem>
        <GalleryItem>
          <GalleryImage
            src="https://user-images.githubusercontent.com/8138047/156685976-7f7a1bbe-46d0-40e5-a9e6-d638a9688c30.jpeg"
            alt="sunset behind San Francisco city skyline"
          />
        </GalleryItem>
        <GalleryItem>
          <GalleryImage
            src="https://user-images.githubusercontent.com/8138047/156686153-03fccaa6-937c-46b7-be9d-9d4818ae4768.jpeg"
            alt="sunset behind San Francisco city skyline"
          />
        </GalleryItem>
        <GalleryItem>
          <GalleryImage
            src="https://user-images.githubusercontent.com/8138047/156686197-ead30400-0182-4fc0-9e2a-2e8f359864ec.jpeg"
            alt="sunset behind San Francisco city skyline"
          />
        </GalleryItem>
      </Gallery>
    </CenteredContainer>
  );
};

export default PhotosPage;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  gap: 16px;
`;

const GalleryItem = styled.div`
  flex: 1 0 18rem;
  //margin: 0.5em;
  box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
  overflow: hidden;
  border-radius: 8px;
`;

const GalleryImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 400ms ease-out;

  &:hover {
    transform: scale(1.15);
  }
`;
