import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as yup from "yup"
import { FormField, Button, Label } from 'semantic-ui-react'
import NorthwindTextInput from "../utilities/customFormControls/NorthwindTextInput"
import ProductService from '../services/productService'
import { toast } from 'react-toastify'

export default function ProductAdd() {
    const initialValues = { productName: "", categoryId: "", quantityPerUnit: "", unitPrice: "", unitsInStock: "" }
    const schema = yup.object({
        productName: yup.string().required("Ürün adı zorunlu!"),
        categoryId: yup.number().required("Kategori zorunlu!"),
        quantityPerUnit: yup.string().required("Ürün açıklaması zorunlu!"),
        unitPrice: yup.number().required("Ürün fiyatı zorunlu!"),
        unitsInStock: yup.number().required("Stok zorunlu!")
    })

    function add(params) {
        let productService = new ProductService();
        productService.add(params).then(toast.success("Ürün eklendi"));
    }

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values) => { add(values) }}>
                <Form className="ui form">
                    <NorthwindTextInput name="productName" placeholder="Ürün Adı" />
                    <NorthwindTextInput name="categoryId" placeholder="categoryId" />
                    <NorthwindTextInput name="quantityPerUnit" placeholder="Ürün Açıklaması" />
                    <NorthwindTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
                    <NorthwindTextInput name="unitsInStock" placeholder="Ürün Stoğu" />
                    <Button color="green" type="submit">Ürün Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
