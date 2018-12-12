import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8082/',
  json: true
})

// import api from '@/api' goes in the file we will be doing our axios calls for

export default {
  async execute(method, resource, data) {
    return client({
      method,
      url: resource,
      data,
      headers: {
      }
    }).then(req => {
      return req.data
    })
  },
  getPosts() {
    return this.execute('get', '/api/cameras')
  },
  getPost(id) {
    return this.execute('get', `/api/cameras/${id}`)
  },
  createPost(data) {
    console.log("in POST data:", data)
    return this.execute('post', '/api/cameras', data)
  },
  updatePost(id, data) {
    console.log("in api id, post data:", id, data)
    return this.execute('patch', `/api/cameras/${id}/add`, data)
  },
  deletePost(id) {
    return this.execute('delete', `/api/cameras/${id}`)
  }
}