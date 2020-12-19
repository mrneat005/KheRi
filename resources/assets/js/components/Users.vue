<template>
  <div class="container">
    <!--Table-->
    <div class="row mt-5">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Responsive Hover Table</h3>

            <div class="card-tools">
              <button class="btn btn-success" data-toggle="modal" data-target="#add">
                Add new<i class="fas fa-user-plus fw"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>email</th>
                <th>Date</th>
                <th>type</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>183</td>
                <td>John Doe</td>
                <td>11-7-2014</td>
                <td>user</td>
                <td></td>
                <td>
                  <a href="#">
                    <i class="fas fa-edit fa-lg green"></i>
                  </a>
                  /
                  <a href="#">
                    <i class="fas fa-trash red fa-lg"> </i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </div>

    <!-- Modal -->
    <!-- Modal -->
    <div
      class="modal fade"
      id="add"
      tabindex="-1"
      role="dialog"
      aria-labelledby="add"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="add">Add User</h5>
            <button
              type="button"
              class="close bg-danger"
              style="border-radius: 60%"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!--Form-->
            <i class="fas fa-file-signature"></i>
            <div class="form-group">
              <input
                v-model="form.name"
                type="text"
                name="name"
                class="form-control"
                placeholder="name"
                :class="{ 'is-invalid': form.errors.has('name') }"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
<i class="fas fa-envelope"></i>
            <div class="form-group">
              <input
                v-model="form.email"
                type="email"
                name="email"
                placeholder="Email Address"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('email') }"
              />
              <has-error :form="form" field="email"></has-error>
            </div>
<i class="fas fa-book"></i>
            <div class="form-group">
              <textarea
                v-model="form.bio"
                name="bio"
                id="bio"
                placeholder="Short bio for user (Optional)"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('bio') }"
              ></textarea>
              <has-error :form="form" field="bio"></has-error>
            </div>
<i class="fas fa-list "></i>
            <div class="form-group">
              <select
                name="type"
                v-model="form.type"
                id="type"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('type') }"
              >
                <option value="">Select User Role</option>
                <option value="admin">Admin</option>
                <option value="user">Standard User</option>
                <option value="author">Author</option>
              </select>
              <has-error :form="form" field="type"></has-error>
            </div>
            <i class="fas fa-lock"></i>
            <div class="form-group inline">
              <input
                v-model="form.password"
                type="password"
                name="password"
                id="password"
                class="form-control"
                placeholder="Password"
                :class="{ 'is-invalid': form.errors.has('password') }"
              />
              
              <has-error :form="form" field="password"></has-error>
            </div>
            

            <!--/Form-->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-success">create</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--/Table-->
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      form: new Form({
        id: "",
        name: "",
        email: "",
        created_at: "",
        type: "",
        password: "",
        photo: "",
      }),
    };
  },
};
</script>
<style></style>
