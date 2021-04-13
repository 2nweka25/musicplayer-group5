// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { firestore } from "../../../lib/firebase"

export default async (req, res) => {
    const {id}= req.body
    try {
       const document = await firestore.collection('songs').doc(id).get()
       const data = document.data()
       res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
  }
  