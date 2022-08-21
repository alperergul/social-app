using System.ComponentModel.DataAnnotations;

namespace ServerApp1.DTO
{
    public class UserForLoginDTO
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
