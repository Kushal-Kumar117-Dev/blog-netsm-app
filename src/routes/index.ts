import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.render("index");
});

router.get("/blogs/create", (req: Request, res: Response) => {
    res.render("blogs/create");
});

router.get("/blogs/edit/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    // try {
    //   const [rows] = await db.query("SELECT * FROM blogs WHERE id = ?", [id]);
    //   if (rows.length === 0) {
    //     return res.status(404).send("Blog not found");
    //   }
    //   res.render("blogs/edit", { blog: rows[0] }); // Pass blog data to the view
    // } catch (error) {
    //   res.status(500).json({ error: error.message });
    // }
  });

  // Update a blog
router.post("/blogs/:id/edit", async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, content } = req.body;
    // try {
    //   const [result] = await db.query("UPDATE blogs SET title = ?, content = ? WHERE id = ?", [
    //     title,
    //     content,
    //     id,
    //   ]);
    //   if ((result as any).affectedRows === 0) {
    //     return res.status(404).send("Blog not found");
    //   }
    //   res.redirect("/blogs"); // Redirect to blog list after updating
    // } catch (error) {
    //   res.status(500).json({ error: error.message });
    // }
  });
  

export default router;