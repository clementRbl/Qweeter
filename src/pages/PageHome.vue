<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          class="new-qweet"
          bottom-slots
          v-model="newQweetContent"
          placeholder="What's happening ?"
          counter
          autogrow
          maxlength="280"
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
          </template>
        </q-input>
      </div>

      <div class="col col-shrink">
        <q-btn
        @click="addNewQweet"
          class="q-mb-lg"
          :disable="!newQweetContent"
          unelevated
          rounded
          color="primary"
          label="Qweet"
          no-caps
        />
      </div>
    </div>

    <q-separator
      class="divider" 
      size="10px" 
      color="grey-2" 
     />

    <q-list separator>
      <q-item
        class="q-py-md"
        v-for="qweet in qweets"
        :key="qweet.date"
        >
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Clément Reboul</strong>
            <span class="text-grey-7">
              @clement__reboul
            </span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1">{{qweet.content}}</q-item-label>

        <div class="qweet-icons row justify-between q-mt-sm">
          <q-btn 
            flat 
            round 
            color="grey"
            icon="far fa-comment"
            size="sm" 
          />
          <q-btn 
            flat 
            round 
            color="grey"
            icon="fas fa-retweet"
            size="sm" 
          />
          <q-btn 
            flat 
            round 
            color="grey"
            icon="far fa-heart"
            size="sm" 
          />
          <q-btn
            @click="deleteQweet(qweet)" 
            flat 
            round 
            color="grey"
            icon="fas fa-trash"
            size="sm" 
          />
        </div>

        </q-item-section>

        <q-item-section side top>
          {{qweet.date | relativeDate }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { formatDistance } from 'date-fns'
export default {
  name: "PageHome",
  data() {
    return {
      newQweetContent: "",
      qweets: [
        {
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur assumenda impedit mollitia animi neque quas repudiandae maiores ducimus quae cupiditate. Cumque, officia cum! Dicta eum totam modi atque in laudantium.',
          date: 1615330332221
        },
        {
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur assumenda impedit mollitia animi neque quas repudiandae maiores ducimus quae cupiditate. Cumque, officia cum! Dicta eum totam modi atque in laudantium.',
          date: 1615330371814
        },
      ]
    };
  },
  methods: {
    addNewQweet() {
      let newQweet = {
        content: this.newQweetContent,
        date: Date.now()
      }
      this.qweets.unshift(newQweet)
    },
    deleteQweet(qweet) {
      let dateToDelete = qweet.date
      let index = this.qweets.findIndex(qweet => qweet.date === dateToDelete)
      this.qweets.splice(index, 1)
    }
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date())
    }
  }
};
</script>
<style lang="sass">
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.qweet-content
  white-space: pre-line
.qweet-icons
  margin-left: -5px
</style>
