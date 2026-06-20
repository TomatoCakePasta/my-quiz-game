/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import TournamentView from '@/views/TournamentView.vue'
import TournamentSidebar from '@/sidebars/TournamentSidebar.vue'
import PracticeView from '@/views/PracticeView.vue'
import PracticeSidebar from '@/sidebars/PracticeSidebar.vue'
import MyPageView from '@/views/MyPageView.vue'
import MyPageSidebar from '@/sidebars/MyPageSidebar.vue'
import MakeQuizView from '@/views/MakeQuizView.vue'
import MakeQuizSidebar from '@/sidebars/MakeQuizSidebar.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // TODO: required login before accessing "/app"
    {
      path: "/",
      component: AuthLayout,
      children: [
        {
          path: "signup",
          component: SignupView
        },
        {
          path: "login",
          component: LoginView
        }
      ]
    },
    {
      path: "/app",
      component: MainLayout,
      children: [
        // 大会に参加
        {
          path: "tournament",
          components: {
            default: TournamentView,
            sidebar: TournamentSidebar
          },
        },
        // 自主練習
        {
          path: "practice",
          components: {
            default: PracticeView,
            sidebar: PracticeSidebar
          }
        },
        // マイページ
        {
          path: "mypage",
          components: {
            default: MyPageView,
            sidebar: MyPageSidebar
          }
        },
        {
          path: "makequiz",
          components: {
            default: MakeQuizView,
            sidebar: MakeQuizSidebar
          }
        }
      ]
    }
  ],
})

export default router
