import React, { useState, useEffect, useRef } from 'react'
import { Box, HStack } from '@chakra-ui/react'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import axios from 'axios'

import Layout from '../../../layout'
import { criarHospital, CriarHospital } from '../../../api/hospitais'
import InputField from '../../../components/Forms/InputField'
import MaskInputField from '../../../components/Forms/MaskInputField'
import SubmitButton from '../../../components/Forms/submit-button'
import { warnValidation } from '../../../components/helpers/warnValidation'
import { useBreadcrumb } from '../../../contexts/BreadcrumbProvider'

import { schema } from './hospital.schema'
import InputFile from '../../../components/Forms/InputFile'
import { buscarCep } from '../../../services/cepService'

function FormHospital() {
  const formRef = useRef<FormHandles>(null)
  const [loading, setLoading] = useState(false)
  const [ufEscolhida, setUfEscolhida] = useState('')

  const { changeBreadcrumbs } = useBreadcrumb()

  useEffect(() => {
    changeBreadcrumbs([
      { title: 'Início', href: '/' },
      { title: 'Hospital' },
      { title: 'Cadastro' },
    ])
  }, [])

  const handleSubmit = async (hospital: CriarHospital) => {
    try {
      setLoading(true)
      await schema.validate(hospital, {
        abortEarly: false,
      })
      const body = {
        fileName: 'teste',
      }
      const response = await axios.post(
        `${window.location.origin}/api/upload`,
        body
      )
      const upload = await axios.put(
        response.data.signedRequest,
        hospital.imagem,
        { headers: { 'Content-Type': 'application/octet-stream' } }
      )
      hospital.imagem = upload.data
      console.log(hospital)
      await criarHospital(hospital)
    } catch (err) {
      warnValidation(err, formRef.current)
    } finally {
      setLoading(false)
    }
  }

  const buscarEnderecoPeloCep = async (cep: string) => {
    try {
      // toggleLoading(true, { message: "Buscando informações pelo CEP..." });
      const dados = await buscarCep(cep)
      if (dados) {
        setUfEscolhida(dados.uf)
        formRef.current?.setFieldValue('estado', dados.uf)
        formRef.current?.setFieldValue('cidade', dados.localidade)
        formRef.current?.setFieldValue('logradouro', dados.logradouro)
      }
    } catch (err) {
      console.error('SERVIÇO DE CEP FALHOU: ', err)
    } finally {
      // toggleLoading(false);
    }
  }

  return (
    <Layout>
      <Box>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputField name="nome" label="Nome" />
          <HStack>
            <MaskInputField
              name="cnpj"
              label="CNPJ"
              mask="99.999.999/9999-99"
            />
            <InputField name="cnes" label="CNES" />
          </HStack>

          <HStack>
            <MaskInputField
              name="cep"
              label="CEP"
              mask="99.999-999"
              onBlur={(evt: any) =>
                buscarEnderecoPeloCep(evt.currentTarget.value)
              }
            />
            <InputField name="estado" label="Estado" />
          </HStack>
          <HStack>
            <InputField name="cidade" label="Cidade" />
            <InputField name="logradouro" label="Logradouro" />
          </HStack>
          <HStack>
            <InputField name="complemento" label="Complemento" />
          </HStack>

          <InputFile name="imagem" />

          <SubmitButton marginTop="33px" isLoading={loading}>
            Adicionar
          </SubmitButton>
        </Form>
      </Box>
    </Layout>
  )
}
export default FormHospital
