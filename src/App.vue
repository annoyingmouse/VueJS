<template>
    <div class="container">
        <form v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-full-name v-model="fullName"></app-full-name>
                    <!--<div class="form-group">-->
                        <!--<label for="firstName">First name</label>-->
                        <!--<input-->
                                <!--type="text"-->
                                <!--id="firstName"-->
                                <!--class="form-control"-->
                                <!--v-model="firstName">-->
                    <!--</div>-->
                    <!--<div class="form-group">-->
                        <!--<label for="lastName">Last name</label>-->
                        <!--<input-->
                                <!--type="text"-->
                                <!--id="lastName"-->
                                <!--class="form-control"-->
                                <!--v-model="lastName">-->
                    <!--</div>-->
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model.trim="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="password">
                    </div>
                    <div class="form-group">
                        <label for="storeYes">
                            <input
                                    type="radio"
                                    id="storeYes"
                                    value="Yes"
                                    v-model="storeData"> Yes
                        </label>
                        <label for="storeNo">
                            <input
                                    type="radio"
                                    id="storeNo"
                                    value="No"
                                    v-model="storeData"> No
                        </label>
                    </div>
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted = true">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <!--<p>First Name: {{firstName}}</p>-->
                        <!--<p>Last Name: {{lastName}}</p>-->
                        <p>Name: {{fullName}}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from "./FullName.vue";
    export default {
        data(){
            return {
                fullName: "Dominic Myers",
                email: "",
                password: "",
                storeData: "Yes",
                submitted: false
            }
        },
        components :{
            appFullName: FullName
        }
    }
</script>

<style>
</style>
