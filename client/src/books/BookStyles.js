import styled from 'styled-components';

// At first i started doing this project with plain css, but i wanted to add styled components because why not.
// There for sure are a lot of things to improve here, but at least it is better than pure css.

export const BookFlexContainer = styled.div`
    display: flex;
`;

export const BookFlexContentLeft = styled.div`
    flex: 2;
    margin-left: 15x;
    margin-right: 15px;
`;

export const BookModificationContent = styled.div`
    text-align: left;
    padding-left: 30px;
`;

export const InputTitle = styled.p`
    margin-bottom: 1px;
`;

export const TextareaStyled = styled.textarea`
    width: 90%;
    height: ${(props) => (props.tall ? '60px' : '30px')};
`;

export const BookFlexContentRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 15x;
    margin-right: 15px;
`;

export const BookBtn = styled.button`
    border: none;
    background-color: inherit;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
    &:hover {
        background: #eee;
    }
`;

export const BookContainerError = styled.div`
    position: absolute;
    bottom: 15px;
    left: 0;
    right: 0;
`;
