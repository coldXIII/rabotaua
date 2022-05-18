<template>
  <section class="my-cv">
    <div class="container">
      <div class="left-side">
        <div class="avatar">
          <div class="social">
            <ul>
              <li title="Facebook">
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100008100491583"
                  ><i class="fab fa-facebook"></i
                ></a>
              </li>
              <li title="Linkedin">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ihor-kholod/"
                  ><i class="fab fa-linkedin"></i
                ></a>
              </li>
              <li title="Telegram">
                <a target="_blank" href="https://t.me/iamcold666"
                  ><i class="fab fa-telegram"></i
                ></a>
              </li>
              <li title="Github">
                <a target="_blank" href="https://github.com/coldXIII"
                  ><i class="fab fa-github"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="user">
            <div class="image">
              <img src="../assets/img/photo.jpg" alt="" />
            </div>
            <div class="info">
              <ul>
                <li>
                  <i class="fas fa-map-marker-alt"></i>
                  <h3>Place</h3>
                  <span>Kyiv, Ukraine</span>
                </li>
                <li>
                  <i class="fas fa-phone"></i>
                  <h3>Phone</h3>
                  <span>+38(066)349-35-66</span>
                </li>
                <li>
                  <i class="far fa-envelope"></i>
                  <h3>Email</h3>
                  <span>kholodihor@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="skills">
          <ul>
            <h2>Skills</h2>
            <li v-for="(skill, index) in skills" :key="index">
              <h4>{{ skill.technology }}</h4>
              <p>{{ skill.programs.toString() }}</p>
              <!-- <em>basic: TypeScript</em> -->
            </li>
          </ul>
        </div>
      </div>
      <div class="right-side">
        <div class="name">
          <h1>Kholod Ihor</h1>
          <span>Junior FrontEnd Developer</span>
        </div>
        <div class="about-me">
          <h3>About Me</h3>
          <p>
            Hi, my name is Ihor. <br />
            I'm an enthusiastic and detail-oriented Frontend Software Engineer
            seeking an entry-level position to improve and use my skills in
            coding, troubleshooting complex problems, and assisting in the
            timely completion of projects.
          </p>
        </div>
        <div class="education">
          <h2>Education</h2>
          <div class="info">
            <div class="place">
              <h3>BeetRoot Academy &nbsp; <span> 2021</span></h3>
              <p>FrontEnd Development</p>
            </div>
            <div class="diploma" :class="{ active: isActive }">
              <img
                src="../assets/img/Diploma.png"
                alt=""
                @click="isActive = !isActive"
              />
            </div>
          </div>
          <div>
            <br />
            <h3>
              National Agricultural University &nbsp; <span> 2003-2008</span>
            </h3>
            <p>Genetics and Crossbreeding</p>
          </div>
        </div>
        <div class="work">
          <h2>Work Experience</h2>
          <p>
            As a beginner, I can't boast of having experience in IT, but I
            really have a passion for software development and constantly
            seeking for new ways to grow and expand my skill set.
          </p>
        </div>
        <div class="projects">
          <h2>My Pet Projects</h2>
          <div class="projects-inner">
            <div class="charity">
              <a target="_blank" href="https://coldxiii.github.io/charity/#/">
                <img
                  class="heart"
                  src="../assets/img/heart-logo.png"
                  alt=""
                />Charity</a
              >
            </div>

            <div class="wooder">
              <a
                target="_blank"
                href="https://coldxiii.github.io/WOODER/index.html"
              >
                <div class="wooder-logo">
                  W<span>OO</span>DER
                  <div class="line"></div>
                </div>
              </a>
            </div>

            <div class="synth">
              <a target="_blank" href="https://coldxiii.github.io/synth/#/">
                <h3 class="synth-logo">Synth</h3>
              </a>
            </div>

            <div class="golden-exits">
              <a
                target="_blank"
                href="https://coldxiii.github.io/golden-exits/#/"
                >Golden Exits</a
              >
            </div>

            <div class="rabota">
              <a target="_blank" href="https://coldxiii.github.io/rabotaua/#/">
                <img src="../assets/img/rabota_new1.png" alt="rabotaua" />
              </a>
            </div>
            <div class="oneplus">
              <a target="_blank" href="https://coldxiii.github.io/1plus1/#/">
                <div class="logo">
                  <img src="../assets/img/1plus1.png" alt="oneplusone" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const skills = computed(() => store.state.skills);

const isActive = ref(false);
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Shalimar&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oooh+Baby&display=swap');
@import '../assets/styles/variables';

.my-cv {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../assets/office-bg.webp) no-repeat;
  background-size: cover;

  .container {
    position: relative;
    background-color: cadetblue;
    width: 70vw;
    border-radius: 1rem;
    background: #fff;
    display: grid;
    grid-template-columns: repeat(12, 1fr);

    .left-side {
      grid-column: 4 span;
      border-right: 1px solid #ccc;
      color: $black;
      .avatar {
        display: flex;

        .social {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: $main;
          border-top-left-radius: 1rem;

          ul li {
            padding: 1rem;

            a {
              color: #232323;

              i {
                font-size: 1.5rem;
              }
              &:hover i {
                transform: scale(1.1);
              }
            }
          }
        }
        .user {
          .image {
            width: 15rem;
            height: 15rem;
            border-radius: 100%;
            padding: 1rem;

            img {
              width: 100%;
              object-fit: cover;
              border-radius: 100%;
              transform: rotate(5deg);
            }
          }

          .info {
            padding: 0.3rem;
            ul li {
              margin-top: 0.2rem;

              i {
                color: $main;
              }
            }
          }
        }
      }
      .skills {
        ul {
          li {
            padding: 0.8rem;
          }
          h2 {
            margin: 2rem auto 0.5rem;
          }
        }
      }
    }

    .right-side {
      padding: 1rem;
      grid-column: 8 span;
      color: $black;

      .name {
        text-align: center;
        padding: 1rem;
      }
      .about-me,
      .education,
      .work {
        padding: 1rem 2rem;
        border-bottom: 1px solid #ccc;
      }
      .education h2,
      .projects h2,
      .work h2 {
        text-decoration: underline;
        text-align: center;
        margin-bottom: 2rem;
      }
      .education h3 span {
        color: #777;
        font-weight: lighter;
      }
      .education .info {
        display: flex;
        justify-content: space-between;

        img {
          width: 8rem;
          height: 4rem;
          cursor: pointer;
        }

        .diploma.active img {
          position: absolute;
          top: 20%;
          left: 0;
          width: 100%;
          height: 50%;
          box-shadow: 0 0 20px teal;
          cursor: pointer;
        }
      }

      .projects {
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .projects-inner {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;

          .charity {
            a {
              font-size: 1.7rem;
              color: red;
              font-family: 'Shalimar';
            }
            &:hover a {
              color: #65cabc;
            }
            .heart {
              width: 3rem;
              height: 3rem;
            }
          }

          .wooder {
            &-logo {
              position: relative;
              font-size: 2rem;
              letter-spacing: 0.5rem;

              span {
                position: relative;
              }
              .line {
                position: absolute;
                left: 30%;
                top: 50%;
                transform: translate(-30%, -50%);
                width: 3rem;
                height: 0.2rem;
                background: #bea67c;
              }
            }
            &:hover a .wooder-logo {
              color: #bea67c;
            }
            &:hover a .wooder-logo .line {
              background: #000;
              left: 50%;
              top: 100%;
              width: 5rem;
              height: 0.1rem;
            }
          }

          .synth {
            margin-top: 1rem;

            &-logo {
              font-size: 4rem;
              font-weight: normal;
              text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.5);
              font-family: 'Dancing Script', cursive;
            }

            &:hover a {
              color: #749eb2;
              text-shadow: 3px 3px 0 #bd8e83;
            }
          }

          .golden-exits {
            margin-top: 1rem;

            a {
              font-size: 3rem;
              font-family: 'Oooh Baby', cursive;
            }
            &:hover a {
              color: gold;
            }
          }

          .rabota {
            img {
              width: 250px;
              transition: 0.3s ease-in-out;
            }
            &:hover a img {
              transform: scale(1.1);
            }
          }

          .oneplus {
            width: 150px;

            img {
              width: 100%;
              transition: all 0.3s ease;
            }
            &:hover img {
              transform: skew(-10deg) scale(1.2);
            }
          }
        }
      }
    }
  }
}
</style>
