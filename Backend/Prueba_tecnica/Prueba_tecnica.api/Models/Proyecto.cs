using System;
using System.Collections.Generic;

namespace Prueba_tecnica.api.Models;

public partial class Proyecto
{
    public int Id { get; set; }

    public string Titulo { get; set; } = null!;

    public string? Descripcion { get; set; }

    public virtual ICollection<Tarea> Tareas { get; set; } = new List<Tarea>();
}
