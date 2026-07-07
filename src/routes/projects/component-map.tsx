import { A } from "@solidjs/router";
import { ErrorBoundary, Suspense } from "solid-js";
import Metadata from "~/components/meta/metadata";
import Header from "~/components/sections/global/header";
import SideNavWrapper from "~/components/wrappers/side-nav-wrapper";
import Routes from "~/data/json/routes.json";

export default function ComponentMap() {
  return (
    <main class={"projects__landing"}>
      <Metadata
        title={"Component Map | Sedaia Designs"}
        description={
          "Development tool for visualizing components in Sakura's project pages."
        }
        url={"/projects/component-map"}
        noIndex={true}
      />

      <Header
        title={"Component Map"}
        description={
          "Development tool for visualizing component hierarchy and preview states within project pages."
        }
        class={"index__header"}
        image={"/images/headers/about.avif"}
      />

      <SideNavWrapper projectRoutes={Routes.projects}>
        <ErrorBoundary
          fallback={(err) => <p>Failed to load component map: {err.message}</p>}
        >
          <Suspense fallback={<p>Loading...</p>}>
            <article class={"component-map"}>
              <section class={"content"}>
                <section id={"typography"}>
                  <h2>Typography</h2>
                  <h1>Heading 1</h1>
                  <h2>Heading 2</h2>
                  <h3>Heading 3</h3>
                  <h4>Heading 4</h4>
                  <h5>Heading 5</h5>
                  <h6>Heading 6</h6>

                  <p>
                    This is a standard paragraph. It can contain{" "}
                    <strong>strong text</strong>, <em>emphasized text</em>,
                    <u>underlined text</u>, and <del>deleted text</del>. We can
                    also show <ins>inserted text</ins>, <mark>marked text</mark>
                    , <small>small text</small>,<sub>subscript</sub>, and{" "}
                    <sup>superscript</sup>.
                  </p>

                  <p>Sample short paragraph content.</p>
                  <p>
                    Sample long paragraph content. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                  </p>
                </section>

                <section id={"links"}>
                  <h2>Links</h2>
                  <p>
                    Internal link using the A component:{" "}
                    <A href={"/"}>Home Page</A>
                  </p>
                  <p>
                    External link using a standard anchor tag:{" "}
                    <a
                      href={"https://solidjs.com"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      SolidJS Website
                    </a>
                  </p>
                </section>

                <section id={"lists"}>
                  <h2>Lists</h2>
                  <h3>Unordered List</h3>
                  <ul>
                    <li>Unordered list item 1</li>
                    <li>
                      Unordered list item 2
                      <ul>
                        <li>Nested unordered item 1</li>
                        <li>Nested unordered item 2</li>
                      </ul>
                    </li>
                    <li>Unordered list item 3</li>
                  </ul>

                  <h3>Ordered List</h3>
                  <ol>
                    <li>Ordered list item 1</li>
                    <li>
                      Ordered list item 2
                      <ol>
                        <li>Nested ordered item 1</li>
                        <li>Nested ordered item 2</li>
                      </ol>
                    </li>
                    <li>Ordered list item 3</li>
                  </ol>

                  <h3>Description List</h3>
                  <dl>
                    <dt>Term 1</dt>
                    <dd>Description for term 1.</dd>
                    <dt>Term 2</dt>
                    <dd>Description for term 2.</dd>
                  </dl>
                </section>

                <section id={"blockquotes"}>
                  <h2>Blockquotes & Citations</h2>
                  <blockquote>
                    <p>
                      This is a blockquote element. It is used to indicate that
                      the enclosed text is an extended quotation.
                    </p>
                    <cite>— Quote Attribution</cite>
                  </blockquote>
                  <p>
                    We can also use the <q>inline quote</q> element.
                  </p>
                </section>

                <section id={"code"}>
                  <h2>Code</h2>
                  <p>
                    Inline code snippet: <code>const project = "Sakura";</code>
                  </p>
                  <p>Code block:</p>
                  <pre>
                    <code>
                      {`function greet(name) {
  return \`Hello, \${name}!\`;
}`}
                    </code>
                  </pre>
                </section>

                <section id={"tables"}>
                  <h2>Tables</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Alice</td>
                        <td>Developer</td>
                        <td>Active</td>
                      </tr>
                      <tr>
                        <td>Bob</td>
                        <td>Designer</td>
                        <td>On Leave</td>
                      </tr>
                      <tr>
                        <td>Charlie</td>
                        <td>Manager</td>
                        <td>Active</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colspan={"3"}>Total Users: 3</td>
                      </tr>
                    </tfoot>
                  </table>
                </section>

                <section id={"forms"}>
                  <h2>Forms & Inputs</h2>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <fieldset>
                      <legend>Personal Information</legend>
                      <div class={"form-group"}>
                        <label for={"name-input"}>Name:</label>
                        <input
                          type={"text"}
                          id={"name-input"}
                          placeholder={"Enter your name"}
                        />
                      </div>
                      <div class={"form-group"}>
                        <label for={"email-input"}>Email:</label>
                        <input
                          type={"email"}
                          id={"email-input"}
                          placeholder={"email@example.com"}
                        />
                      </div>
                    </fieldset>

                    <fieldset>
                      <legend>Preferences</legend>
                      <div class={"form-group"}>
                        <p>Notification Type:</p>
                        <label>
                          <input
                            type={"radio"}
                            name={"notify"}
                            value={"email"}
                            checked
                          />{" "}
                          Email
                        </label>
                        <label>
                          <input type={"radio"} name={"notify"} value={"sms"} />{" "}
                          SMS
                        </label>
                      </div>

                      <div class={"form-group"}>
                        <label>
                          <input type={"checkbox"} name={"terms"} /> I agree to
                          the terms
                        </label>
                      </div>
                    </fieldset>

                    <div class={"form-group"}>
                      <label for={"message-area"}>Message:</label>
                      <textarea
                        id={"message-area"}
                        rows={"4"}
                        placeholder={"Your message here..."}
                      />
                    </div>

                    <div class={"button-group"}>
                      <button type={"submit"}>Submit</button>
                      <button type={"button"}>Button</button>
                      <button type={"reset"}>Reset</button>
                      <button type={"button"} disabled>
                        Disabled
                      </button>
                    </div>
                  </form>
                </section>

                <section id={"multimedia"}>
                  <h2>Multimedia</h2>
                  <figure>
                    <img
                      src={"https://placehold.co/600x400"}
                      alt={"Placeholder"}
                    />
                    <figcaption>A placeholder image with a caption.</figcaption>
                  </figure>
                </section>

                <section id={"misc"}>
                  <h2>Miscellaneous</h2>
                  <hr />
                  <details>
                    <summary>Disclosure Widget (Click to expand)</summary>
                    <p>
                      This is hidden content that can be revealed by clicking
                      the summary.
                    </p>
                  </details>
                  <p>
                    <progress value={"70"} max={"100"}>
                      70%
                    </progress>
                  </p>
                  <p>
                    <meter value={"0.6"}>60%</meter>
                  </p>
                </section>
                <section id={"colors"}>
                  <h2>Colors</h2>
                  <div class={"color-group"}>
                    <h3>Slate</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-slate-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-slate-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-slate-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-slate-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-slate-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-slate-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-slate-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-slate-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-slate-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-slate-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-slate-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Gray</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-gray-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-gray-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-gray-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-gray-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-gray-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-gray-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-gray-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-gray-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-gray-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-gray-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-gray-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Zinc</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-zinc-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-zinc-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-zinc-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-zinc-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-zinc-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-zinc-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-zinc-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-zinc-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-zinc-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-zinc-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-zinc-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Neutral</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-neutral-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-neutral-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-neutral-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-neutral-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-neutral-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-neutral-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-neutral-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-neutral-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-neutral-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-neutral-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-neutral-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Stone</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-stone-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-stone-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-stone-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-stone-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-stone-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-stone-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-stone-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-stone-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-stone-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-stone-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-stone-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Red</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-red-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-red-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-red-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-red-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-red-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-red-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-red-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-red-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-red-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-red-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-red-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Orange</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-orange-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-orange-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-orange-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-orange-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-orange-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-orange-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-orange-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-orange-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-orange-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-orange-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-orange-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Amber</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-amber-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-amber-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-amber-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-amber-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-amber-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-amber-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-amber-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-amber-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-amber-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-amber-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-amber-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Yellow</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-yellow-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-yellow-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-yellow-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-yellow-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-yellow-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-yellow-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-yellow-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-yellow-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-yellow-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-yellow-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-yellow-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Lime</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-lime-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-lime-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-lime-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-lime-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-lime-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-lime-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-lime-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-lime-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-lime-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-lime-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-lime-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Green</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-green-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-green-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-green-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-green-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-green-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-green-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-green-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-green-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-green-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-green-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-green-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Emerald</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-emerald-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-emerald-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-emerald-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-emerald-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-emerald-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-emerald-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-emerald-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-emerald-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-emerald-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-emerald-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-emerald-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Teal</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-teal-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-teal-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-teal-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-teal-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-teal-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-teal-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-teal-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-teal-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-teal-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-teal-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-teal-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Cyan</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-cyan-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-cyan-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-cyan-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-cyan-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-cyan-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-cyan-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-cyan-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-cyan-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-cyan-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-cyan-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-cyan-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Sky</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-sky-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-sky-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-sky-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-sky-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-sky-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-sky-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-sky-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-sky-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-sky-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-sky-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-sky-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Blue</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-blue-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-blue-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-blue-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-blue-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-blue-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-blue-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-blue-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-blue-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-blue-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-blue-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-blue-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Indigo</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-indigo-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-indigo-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-indigo-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-indigo-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-indigo-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-indigo-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-indigo-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-indigo-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-indigo-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-indigo-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-indigo-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Violet</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-violet-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-violet-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-violet-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-violet-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-violet-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-violet-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-violet-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-violet-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-violet-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-violet-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-violet-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Purple</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-purple-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-purple-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-purple-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-purple-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-purple-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-purple-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-purple-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-purple-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-purple-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-purple-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-purple-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Fuchsia</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-fuchsia-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-fuchsia-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-fuchsia-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-fuchsia-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-fuchsia-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-fuchsia-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-fuchsia-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-fuchsia-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-fuchsia-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-fuchsia-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-fuchsia-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Pink</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-pink-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-pink-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-pink-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-pink-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-pink-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-pink-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-pink-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-pink-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-pink-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-pink-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-pink-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                  <div class={"color-group"}>
                    <h3>Rose</h3>
                    <div class={"color-grid"}>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-rose-50-val))`,
                        }}
                      >
                        <span class={"color-label"}>50</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-rose-100-val))`,
                        }}
                      >
                        <span class={"color-label"}>100</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-rose-200-val))`,
                        }}
                      >
                        <span class={"color-label"}>200</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-rose-300-val))`,
                        }}
                      >
                        <span class={"color-label"}>300</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-rose-400-val))`,
                        }}
                      >
                        <span class={"color-label"}>400</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-rose-500-val))`,
                        }}
                      >
                        <span class={"color-label"}>500</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-rose-600-val))`,
                        }}
                      >
                        <span class={"color-label"}>600</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-rose-700-val))`,
                        }}
                      >
                        <span class={"color-label"}>700</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-rose-800-val))`,
                        }}
                      >
                        <span class={"color-label"}>800</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-rose-900-val))`,
                        }}
                      >
                        <span class={"color-label"}>900</span>
                      </div>
                      <div
                        class={"color-swatch"}
                        style={{
                          "background-color": `hsl(var(--color-rose-950-val))`,
                        }}
                      >
                        <span class={"color-label"}>950</span>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </article>
          </Suspense>
        </ErrorBoundary>
      </SideNavWrapper>
    </main>
  );
}
