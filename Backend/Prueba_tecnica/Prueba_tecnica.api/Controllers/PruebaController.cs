using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Prueba_tecnica.api.Models;
using System;

namespace Prueba_tecnica.api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PruebaController : ControllerBase
    {
        private readonly TaskManagerContext _context;

        public PruebaController(TaskManagerContext context)
        {
            _context = context;
        }

    
        [HttpGet]
        public IEnumerable<int> Numeros()
        {
            return Enumerable.Range(0, 5);        
        }

        [HttpGet("Usuarios")]
        public async Task<IEnumerable<Usuario>>Usuarios()
        {
            return await _context.Usuarios.ToListAsync();
        }

        [HttpGet("Proyectos")]
        public async Task<IEnumerable<Proyecto>> Proyecto()
        {
            return await _context.Proyectos.ToListAsync();
        }


        [HttpGet("Tareas")]
        public async Task<IEnumerable<Tarea>> Tarea()
        {
            return await _context.Tareas.ToListAsync();
        }



        [HttpPost("Usuarios")]

        public async Task<ActionResult> CrearUsuario([FromBody]Usuario usuario)
        {
            await _context.Usuarios.AddAsync(usuario);
            await _context.SaveChangesAsync();

            return Ok();
        }


        [HttpDelete("Usuarios/{id}")]
        public async Task<ActionResult> BorrarUsuario([FromRoute]int id)
        {
            _context.Usuarios.Remove(new Usuario { Id = id});
            await _context.SaveChangesAsync();

            return Ok();
        }


        [HttpPut("Usuarios/{id}")]
        public async Task<ActionResult> ActualizarUsuario([FromRoute]int id, [FromBody] Usuario usuario)
        {
            usuario.Id = id;
            _context.Usuarios.Update(usuario);
            await _context.SaveChangesAsync();

            return Ok();
        }

    }
}
