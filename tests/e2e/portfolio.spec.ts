import { expect, test } from '@playwright/test'

const linkedinUrl = 'https://www.linkedin.com/in/rohit-shinde-b5b504220'
const email = 'rohitshinde.cybersec@gmail.com'
const phone = '+919834916067'

test.describe('Portfolio complete user flow', () => {
  test('loads the homepage with the primary profile content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Rohit Shinde/i)
    await expect(page.getByRole('heading', { name: 'Rohit Shinde' }).first()).toBeVisible()
    await expect(page.getByText('Cybersecurity Analyst', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('Open to security + development work')).toBeVisible()
  })

  test('navigates through every desktop section', async ({ page }) => {
    await page.goto('/')

    const navigation = [
      ['About', '#about'],
      ['Experience', '#experience'],
      ['Projects', '#projects'],
      ['Skills', '#skills'],
      ['Contact', '#contact'],
    ] as const

    for (const [label, hash] of navigation) {
      const link = page.locator('nav a', { hasText: label })
      await expect(link).toHaveAttribute('href', hash)
      await link.click()
      await expect(page.locator(hash)).toBeVisible()
    }

    await page.locator('header a[href="#top"]').click()
    await expect(page.locator('#top')).toBeVisible()
  })

  test('renders the complete portfolio content', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('#about')).toContainText('About')
    await expect(page.locator('#experience')).toContainText('Experience')
    await expect(page.locator('#projects')).toContainText('Projects')
    await expect(page.locator('#skills')).toContainText('Skills & certifications')
    await expect(page.locator('#contact')).toContainText('Contact')

    await expect(page.getByText('Application Development Intern → Project Associate')).toBeVisible()
    await expect(page.getByText('Audio Transcription App (IndoScribe)')).toBeVisible()
    await expect(page.getByText('Self‑Healing Security System')).toBeVisible()
    await expect(page.getByText('Phishing Detection & URL Reputation Checker')).toBeVisible()
    await expect(page.getByText('Certified Ethical Hacker (CEH) — in progress')).toBeVisible()
  })

  test('validates email, phone, LinkedIn and CV actions', async ({ page, request }) => {
    await page.goto('/')

    await expect(page.locator('a[href="mailto:' + email + '"]')).toHaveCount(2)
    await expect(page.locator('a[href="tel:' + phone + '"]')).toHaveCount(2)

    const linkedinLinks = page.locator('a[href="' + linkedinUrl + '"]')
    await expect(linkedinLinks).toHaveCount(5)
    await expect(linkedinLinks.first()).toHaveAttribute('target', '_blank')
    await expect(linkedinLinks.first()).toHaveAttribute('rel', 'noreferrer')

    const cvLinks = page.locator('a[href="/Rohit_Shinde_CV_2026.pdf"]')
    await expect(cvLinks).toHaveCount(2)

    const cvResponse = await request.get('/Rohit_Shinde_CV_2026.pdf')
    expect(cvResponse.ok()).toBeTruthy()
    expect(cvResponse.headers()['content-type']).toContain('application/pdf')
  })

  test('has no uncaught page errors during the main flow', async ({ page }) => {
    const pageErrors: string[] = []
    page.on('pageerror', (error) => pageErrors.push(error.message))

    await page.goto('/')
    await page.locator('nav a[href="#about"]').click()
    await page.locator('nav a[href="#experience"]').click()
    await page.locator('nav a[href="#projects"]').click()
    await page.locator('nav a[href="#skills"]').click()
    await page.locator('nav a[href="#contact"]').click()

    expect(pageErrors).toEqual([])
  })

  test('works on a mobile viewport without horizontal overflow', async ({ page }) => {
    await page.goto('/')

    const viewport = page.viewportSize()
    expect(viewport).not.toBeNull()

    const dimensions = await page.evaluate(() => ({
      documentWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
    }))

    expect(dimensions.documentWidth).toBeLessThanOrEqual(dimensions.viewportWidth + 1)
    await expect(page.getByRole('heading', { name: 'Rohit Shinde' }).first()).toBeVisible()
    await expect(page.getByText('Email me')).toBeVisible()
    await expect(page.getByText('Download CV').first()).toBeVisible()
  })
})
