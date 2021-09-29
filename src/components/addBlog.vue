<template>
  <div id="add-blog">
    <h2>Add a new Blog Post</h2>
    <form>
      <label for="blogTitle">Blog Title</label>
      <input type="text" required id="blogTitle" v-model.lazy="blog.title" />
      <label for="blogContent">Blog Content</label>
      <textarea name="blogContent" id="blogContent" v-model.lazy="blog.content"></textarea>

      <div id="checkboxes">
        <label for="check1">Checkbox 1</label>
        <input type="checkbox" id="check1" value="checkbox1" v-model="blog.categories" />

        <label for="check2">Checkbox 2</label>
        <input type="checkbox" id="check2" value="checkbox2" v-model="blog.categories" />

        <label for="check3">Checkbox 3</label>
        <input type="checkbox" id="check3" value="checkbox3" v-model="blog.categories" />

        <label for="check4">Checkbox 4</label>
        <input type="checkbox" id="check4" value="checkbox4" v-model="blog.categories" />
      </div>

      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>

    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categores</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "addBlog",
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['Austin', 'Griffin', 'Abbie', 'Morgan']
    }
  }
}
</script>

<style>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
  word-wrap: break-word;
}
h3{
  margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  padding: 5px;
  display: inline-block;
}
</style>
