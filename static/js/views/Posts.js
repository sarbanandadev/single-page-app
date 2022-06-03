import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
        <h1>Posts</h1>
        <p>You are viewing the posts!</p>

        <pre>
echo "# single-page-app" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M sarbananda
git remote add origin https://github.com/sarbanandadev/single-page-app.git
git push -u origin sarbananda

…or push an existing repository from the command line

git remote add origin https://github.com/sarbanandadev/single-page-app.git
git branch -M sarbananda
git push -u origin sarbananda
        </pre>
    `;
  }
}
