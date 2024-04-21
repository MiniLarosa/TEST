using System;
using System.Collections.Generic;

namespace Prueba_tecnica.api.Models;

public partial class Tarea
{
    public int Id { get; set; }

    public string TituloTarea { get; set; } = null!;

    public string? DescripcionTarea { get; set; }

    public int Estado { get; set; }

    public DateOnly FechaInicioTarea { get; set; }

    public DateOnly FechaFinalTarea { get; set; }

    public int? IdProyecto { get; set; }

    public virtual Proyecto? IdProyectoNavigation { get; set; }
}
