import React from 'react'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Questions } from '../../components/Question'
import { Content, Title, Text } from '../../styles/base-styles.js'

export const Duvidas = () => {
  return (
    <Content>
    <Title>
    <QuestionCircleOutlined />
      {`Dúvidas`}
    </Title>
    <Text>
      {`Olá queride! Você tem alguma dúvida de como conseguir horas complementares e quais atividades 
      extra-curriculares podem ser consideradas como atividade complementares?
      Esperamos que essa seção do site lhe ajude a tirar algumas dúvidas.`}
    </Text>
    <Questions />
  </Content>
)}
