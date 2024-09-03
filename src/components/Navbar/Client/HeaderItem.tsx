import React from 'react'
import AuthButton from "@/components/Button/AuthButton";
import { ModeToggle } from '@/components/Button/ModeToggle';

const HeaderItem = () => {
  return (
    <div className="hidden md:block">
    <nav aria-label="Global">
      <ul className="flex items-center gap-6 text-sm">
        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Feedback
          </a>
        </li>

        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Save More App
          </a>
        </li>

        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Sell on Winshopee
          </a>
        </li>

        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Customer Care
          </a>
        </li>

        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Track My Orders
          </a>
        </li>

        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
            href="/signin"
          >
            Login
          </a>
        </li>
        <li>
        <div className="flex items-center justify-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-primary px-2 py-0.5 text-sm font-medium text-muted shadow dark:hover:bg-primary"
                href="#"
              >
                Register
              </a>
            </div>
            <ModeToggle/>
          </div>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default HeaderItem
