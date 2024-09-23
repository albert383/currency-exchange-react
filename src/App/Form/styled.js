import styled from "styled-components";

export const FormWrapper = styled.form`
    border: dashed 5px rgba(0, 128, 128, 0.212);
    border-radius: 10px;
    background-color: rgb(188, 251, 230);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    min-width: 650px;

    @media (max-width: 767px) {
        min-width: auto;
    }
`;

export const Fieldset = styled.fieldset`
    border-radius: 5px;
    padding: 20px;
    margin: 20px;
`;

export const Legend = styled.legend`
    text-align: left;
    border: 2px solid #ce330ca6;
    padding: 10px;
    box-shadow: 5px 5px #aaa;
    background-color: teal;
    color: white;
    border-radius: 5px;
`;

export const Label = styled.label`
    margin-right: 10px;
    padding: 5px;
    max-width: 150px;
    width: 100%;
    padding-right: 20px;
`;

export const InputField = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    max-width: 500px;
    width: 95%;
    border-radius: 6px;
`;

export const ListItem = styled.li`
    list-style: none;
`;

export const Button = styled.button`
    width: 100%;
    border: solid transparent;
    background-color: teal;
    cursor: pointer;
    border-radius: 5px;
    color: aliceblue;
    padding: 10px;

    &:hover {
        background-color: rgba(0, 128, 128, 0.829);
        transition: 0.3s;
        border: solid black;
    }

    &:active {
        background-color: rgba(0, 128, 85, 0.678);
        transition: 0.3s;
    }
`;
