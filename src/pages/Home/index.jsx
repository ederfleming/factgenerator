import React, { useState, useEffect } from "react";

import { useCategories } from "../../hooks/useCategories";

import Header from "../../components/Header";
import Button from "../../components/Button";
import CategoryButton from "../../components/CategoryButton";

import {
  HomeContainer,
  CategoryList,
  Title,
  FactContainer,
  Fact,
} from "./styles";

const Home = () => {
  const {
    firstFact,
    fetchCategories,
    categoriesList,
    fact,
    fetchFactByCategory,
  } = useCategories();

  const [choosenCategory, setChoosenCategory] = useState("");

  useEffect(() => {
    firstFact();
    fetchCategories();
  }, []);

  return (
    <HomeContainer>
      <Header />
      {choosenCategory ? (
        <Title>Facts about {choosenCategory}</Title>
      ) : (
        <Title>Choose a category to see available facts</Title>
      )}

      <CategoryList>
        {!choosenCategory &&
          categoriesList.map((category, index) => (
            <CategoryButton
              key={index}
              text={category}
              onClick={() => {
                setChoosenCategory(category);
                fetchFactByCategory(category);
              }}
            />
          ))}
      </CategoryList>

      {fact && (
        <FactContainer>
          <Fact className="container">{fact.value}</Fact>
          {choosenCategory && (
            <>
              <Button
                text={`See new fact about ${choosenCategory}`}
                onClick={() => fetchFactByCategory(choosenCategory)}
              />
              <Button
                text={`Select new category to see more facts`}
                onClick={() => setChoosenCategory("")}
              />
            </>
          )}
        </FactContainer>
      )}
    </HomeContainer>
  );
};

export default Home;
