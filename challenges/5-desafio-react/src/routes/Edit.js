import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "styled-components";
import { Body } from "../components/Body";
import { useForm } from "react-hook-form";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/system";

import { Title } from "./Add";

const HeaderBox = styled.div`
  height: 90px;
  width: 100%;
  background-color: #c0bebe;
  margin-bottom: 30px;
  font-size: 28px;
  padding: 20px 25% 20px 25%;
  display: flex;
  justify-content: center;
  @media (max-width: 800px) {
    padding: 20px 5% 20px 5%;
  }
`;

const CardBox = styled.div`
  max-width: 580px;
  width: 80%;
  height: 280px;
  border: 1px solid gray;
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Edit() {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const [task, setTask] = useState();
  useEffect(() => {
    if (id) {
      const get = async () => {
        try {
          const response = await axios.get(
            "https://otterwise-fake-api.herokuapp.com/tasks/04p06sl"
          );
          let dataPosts = response.data.tasks;
          setTask(dataPosts.find((elem) => elem.id === id));
        } catch (error) {
          console.error(error);
        }
      };

      get();
    }
  }, [id]);

  async function onSubmit(data) {
    try {
      await axios.put(
        `https://otterwise-fake-api.herokuapp.com/tasks/04p06sl/${id}`,
        data
      );

      history.push(`/`);
    } catch (error) {
      console.error(error);
    }
  }

  if (!task) return null;

  return (
    <Body>
      <HeaderBox>
        <TitleBox>
          <Link to="/">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#686e6b",
                ":hover": { backgroundColor: "#686e6b" },
                marginRight: "15px",
              }}
              type="submit"
            >
              <ArrowBackIcon />
            </Button>
          </Link>
          <Title> Edit your Task!</Title>
        </TitleBox>
      </HeaderBox>

      <CardBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              label="Your Task"
              variant="outlined"
              {...register("title", { required: true })}
              defaultValue={task ? task.title : ""}
            />
            <TextField
              sx={{ marginTop: "30px" }}
              label="About Your Task"
              variant="outlined"
              {...register("description", { required: true })}
              defaultValue={task ? task.description : ""}
            />
          </Box>

          <ButtonBox>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#686e6b",
                ":hover": { backgroundColor: "#686e6b" },
                height: "40px",
              }}
              type="submit"
            >
              New Task!
            </Button>
          </ButtonBox>
        </form>
      </CardBox>
    </Body>
  );
}

export default Edit;
