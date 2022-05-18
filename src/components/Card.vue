<template>
  <section>
    <article class="card-content">
      <div class="fade" v-if="isDisliked || isResponded"></div>
      <div class="card-header">
        <img :src="require(`../assets/image/${card.image}.webp`)" />
      </div>
      <div class="card-main">
        <div class="status">
          <span v-if="this.card.status == 'Горячая🔥'">{{ card.status }}</span>
          <span class="new" v-if="this.card.status == 'Новая🌿'">{{
            card.status
          }}</span>
          <span class="liked" v-if="isLiked">Избранная</span>
          <span class="disliked" v-if="isDisliked">Неинтересная</span>
          <span class="responded" v-if="isResponded">Вы откликнулись</span>
        </div>
        <div class="vacancy">
          <h5>{{ card.job }}</h5>
          <div class="logo">
            <img :src="require(`../assets/logo/${card.logo}.png`)" />
          </div>
        </div>
        <div class="salary">
          <span>
            <b>{{ card.salary }}</b> + bonus
          </span>
        </div>
        <div class="place">
          <span>{{ card.company }}</span
          >&nbsp; {{ card.city }}
        </div>
        <div class="advantages">
          <span v-for="(advantage, index) in card.advantages" :key="index">{{
            card.advantages[index]
          }}</span>
        </div>
      </div>
      <div class="card-footer">
        <div class="reactions">
          <form action="#" method="">
            <input
              type="hidden"
              name="img"
              role="uploadcare-uploader"
              data-input-accept-types="image/*"
              data-min-size="102400"
              data-max-size="1048576"
            />
            <button @click.prevent="isResponded = !isResponded" type="submit">
              <i class="fas fa-upload"></i>
            </button>
          </form>
          <div class="like">
            <i
              @click.stop="isLiked = !isLiked"
              :class="{ fas: isLiked }"
              class="far fa-star"
            ></i>
          </div>
          <div class="dislike">
            <i
              @click.stop="isDisliked = !isDisliked"
              :class="{ fas: isDisliked }"
              class="far fa-thumbs-down"
            ></i>
          </div>
        </div>
        <div class="time">
          <span>{{ card.time }}</span>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AppCard',
  props: ['card'],
  data() {
    return {
      isLiked: false,
      isDisliked: false,
      isResponded: false,
    };
  },
  computed: {
    ...mapState(['cards']),
  },
};
</script>

<style scoped lang="scss">
@import '../assets/styles/variables';

form {
  display: flex;
  justify-content: space-around;
  align-items: center;
  i {
    color: red;
  }
}

.card-content {
  position: relative;
  width: 100%;
  background: $white;

  @media screen and (max-width: 450px) {
    width: 100%;
  }

  .fade {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    z-index: 10000;
  }
  .card-header {
    width: 100%;
    height: 15vh;

    @media screen and (max-width: 450px) {
      padding: 0.5rem;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .card-main {
    padding: 1rem;

    @media screen and (max-width: 450px) {
      padding: 0.5rem;
    }

    .status {
      padding: 0.3rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      span {
        background: rgba(255, 0, 0, 0.2);
        color: red;
        padding: 0.2rem 0.7rem;
        border-radius: 1rem;

        &.new {
          background: rgba(0, 255, 0, 0.2);
          color: green;
        }
        &.responded {
          background: rgba(0, 255, 0, 0.2);
          color: green;
          padding: 0.4rem 0.7rem;
        }
        &.liked {
          background: rgba(255, 215, 0, 0.3);
          color: gold;
          padding: 0.4rem 0.7rem;
        }
        &.disliked {
          background: rgba(125, 125, 125, 0.3);
          color: #333;
          padding: 0.4rem 0.7rem;
        }
      }
    }
    .vacancy {
      padding: 0.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 450px) {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }

      h5 {
        font-size: 1rem;
      }
      .logo {
        max-width: 8rem;
        height: 4rem;

        @media screen and (max-width: 750px) {
          max-width: 10rem;
          height: 5rem;
        }
        @media screen and (max-width: 450px) {
          max-width: 10rem;
          height: 5rem;
          margin: 0.5rem auto;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .place {
      padding: 0.3rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span {
        color: red;
      }
    }
    .salary {
      padding: 0.3rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      span {
        color: #666;

        b {
          color: #000;
        }
      }
    }
    .advantages {
      padding: 0.3rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;
      overflow-x: auto;

      &::-webkit-scrollbar {
        width: 12px;
        height: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background: linear-gradient(to left, transparent, $main);
        border-radius: 6px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to right, transparent, #a2abce);
        border-radius: 6px;
      }
    
    
      span {
        display: inline-block;
        border: 1px solid #ccc;
        font-size: 0.8rem;
        padding: 0.3rem 0.6rem;
      }
    }
  }
  .card-footer {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1050px) {
      flex-wrap: wrap;
    }
    @media screen and (max-width: 550px) {
      flex-wrap: wrap;
    }
    @media screen and (max-width: 450px) {
      padding: 0.5rem;
    }

    .reactions {
      width: 60%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0.2rem;

      @media screen and (max-width: 1050px) {
        width: 100%;
        padding: 0.5rem 0;
      }

      i {
        color: red;
        cursor: pointer;
      }
    }
    .time {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(0, 0, 0, 0.5);

      @media screen and (max-width: 1050px) {
        width: 100%;
        padding: 0.5rem 0;
        text-align: center;
      }
    }
  }
}
</style>
