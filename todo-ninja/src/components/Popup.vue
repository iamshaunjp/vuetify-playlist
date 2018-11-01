<template>
  <v-dialog max-width="600px">
    <v-btn flat slot="activator" class="success">Add New Project</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field v-model="title" label="Title" prepend-icon="folder"></v-text-field>
          <v-textarea v-model="content" label="Information" prepend-icon="edit"></v-textarea>
          <v-spacer></v-spacer>
          <v-btn flat @click="submit" class="success mx-0 mt-3">Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    submit() {
      console.log(this.title, this.content)
    }
  }
}
</script>
