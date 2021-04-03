import React from 'react';
import styled from 'styled-components';

const PreviewCollection = ({ title, items }) => {
	return (
		<PreviewCollectionWrapper>
			<PreviewCollectionTitle>{title}</PreviewCollectionTitle>
			<PreviewCollectionItems>
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<PreviewCollectionCard key={item.id}>
							<ImageContainer>
								<Image src={item.image} alt={item.title} />
							</ImageContainer>
							<CardParagraph>
								<Paragraph>{item.title}</Paragraph>
								<Paragraph>${item.price}</Paragraph>
							</CardParagraph>
						</PreviewCollectionCard>
					))}
			</PreviewCollectionItems>
		</PreviewCollectionWrapper>
	);
};

export default PreviewCollection;

const PreviewCollectionWrapper = styled.section``;
const PreviewCollectionTitle = styled.h3``;
const PreviewCollectionItems = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 30px;
	margin: 20px 0;
	margin-bottom: 50px;
`;
const PreviewCollectionCard = styled.div``;
const ImageContainer = styled.div`
	height: 300px;
	margin-bottom: 20px;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	background-position: center;
	background-repeat: no-repeat;
`;
const CardParagraph = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Paragraph = styled.p`
	font-size: 14px;
`;
