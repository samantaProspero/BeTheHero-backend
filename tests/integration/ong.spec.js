const request = require('supertest')
const app = require('../../src/app')

describe('ONG', ()=>{
        it('should be able to create a new ONG', async ()=>{
        const response = await request(app).post('/ongs').send({
            name:"APAD2",
            email: "contatoapad.com.br",
            whatsapp: "47000000001",
            city: "Rio do Sul",
            uf:"SC"
        }) 
    })
})