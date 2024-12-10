import { useForm } from "react-hook-form";
import Icon1 from "../assets/FormIcon1.png";
import { Alert, styled, TextField } from "@mui/material";
import { usersInstance } from "../api/usersInstance";
import { useState } from "react";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const postUsers = async (formValue) => {
    try {
      await usersInstance.post("/users", formValue);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (formValue) => {
    postUsers(formValue);
  };

  return (
    <Container>
      <FirstFlourIcon src={Icon1} alt="" />
      <SecondFlour>
        <SecondFlourGreenLine></SecondFlourGreenLine>
        Контактная информация
        <SecondFlourEmail>Email</SecondFlourEmail>
        <SecondFlourShowing>Не будет видно получателю</SecondFlourShowing>
        <SecondFlourWarning>*Обязательный опрос</SecondFlourWarning>
      </SecondFlour>

      <ThirdFloor>
        <p>Имя *</p>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledTextField1
            variant="standard"
            color="success"
            placeholder="Мой ответ"
            {...register("name", { required: "Это обязательный вопрос." })}
          />
          {errors.name && <Alert severity="error">{errors.name.message}</Alert>}

          <FourthFloor>
            <p>Адрес электронной почты *</p>
            <StyledTextField2
              variant="standard"
              color="success"
              placeholder="Мой ответ"
              {...register("email", { required: "Это обязательный вопрос." })}
            />
            {errors.email && (
              <Alert severity="error">{errors.email.message}</Alert>
            )}
          </FourthFloor>

          <FifthFloor>
            <p>Номер телефона</p>
            <StyledTextField3
              variant="standard"
              color="success"
              placeholder="Мой ответ"
              {...register("number", { required: "Это обязательный вопрос." })}
            />
            {errors.number && (
              <Alert severity="error">{errors.number.message}</Alert>
            )}
          </FifthFloor>

          <SixFloor>
            <p>Комментарии</p>
            <StyledTextField4
              variant="standard"
              color="success"
              placeholder="Мой ответ"
              {...register("commit", { required: "Это обязательный вопрос." })}
            />
            {errors.commit && (
              <Alert severity="error">{errors.commit.message}</Alert>
            )}
          </SixFloor>

          <StyledButton type="submit">Отправить</StyledButton>
        </StyledForm>
      </ThirdFloor>
    </Container>
  );
}

const Container = styled("div")({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 30,
});

const FirstFlourIcon = styled("img")({
  width: 815,
  height: 250,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 15,
});

const SecondFlour = styled("div")({
  width: 800,
  height: 250,
  padding: 10,
  borderRadius: 15,
  backgroundColor: "#ffffff",
  fontSize: 35,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const SecondFlourGreenLine = styled("div")({
  width: 800,
  height: 15,
  borderRadius: "15px 15px 0px 0px",
  backgroundColor: "green",
});

const SecondFlourEmail = styled("p")({
  fontSize: 20,
  backgroundColor: "#ffffff",
  color: "#545353",
  fontWeight: "bold",
});

const SecondFlourShowing = styled("p")({
  backgroundColor: "#ffffff",
  fontSize: 20,
  color: "grey",
});

const SecondFlourWarning = styled("p")({
  backgroundColor: "#ffffff",
  fontSize: 20,
  color: "red",
});

const StyledTextField1 = styled(TextField)({
  width: 400,
});

const ThirdFloor = styled("div")({
  width: 800,
  height: 200,
  padding: 10,
  fontSize: 20,
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  borderRadius: "15px",
  gap: 70,
});

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: 70,
});

const FourthFloor = styled("div")({
  width: 790,
  height: 200,
  padding: 10,
  fontSize: 20,
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  borderRadius: "15px",
  gap: 70,
});

const StyledTextField2 = styled(TextField)({
  width: 400,
});

const StyledButton = styled("button")({
  width: 200,
  height: 35,
  fontSize: 16,
  lineHeight: "35px",
  backgroundColor: "#298904",
  color: "#ffffff",
  border: "none",
  borderRadius: 5,
});

const FifthFloor = styled("div")({
  width: 790,
  height: 200,
  padding: 10,
  fontSize: 20,
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  borderRadius: "15px",
  gap: 70,
});

const StyledTextField3 = styled(TextField)({
  width: 400,
});

const SixFloor = styled("div")({
  width: 790,
  height: 200,
  padding: 10,
  fontSize: 20,
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  borderRadius: "15px",
  gap: 70,
});

const StyledTextField4 = styled(TextField)({
  width: 400,
});
