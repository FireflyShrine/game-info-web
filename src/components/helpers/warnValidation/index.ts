import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

export const warnValidation = (errors: any, formRef: FormHandles | null) => {
  const validationErrors: any = {}
  if (errors instanceof Yup.ValidationError) {
    errors.inner.forEach((e) => {
      validationErrors[e.path as any] = e.message
    })
    formRef?.setErrors(validationErrors)
  }
}
